import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, resetPasswordSuccess, userError, fetchUsersStart, setUsers } from './user.actions';
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from './../../firebase/utils';
import { handleDeleteUser, handleFetchUsers, handleResetPasswordAPI, handleUpdateUser } from './user.helpers';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
        const snapshot = yield userRef.get();
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );
    } catch (err) {
        //console.log(err);
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (err) {
        //console.log(err);
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (err) {
        //console.log(err);
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        )
    } catch (err) {
        //console.log(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({ payload: {
    displayName,
    email,
    password,
    confirmPassword
} }) {
    if (password != confirmPassword) {
        const err = ['Passwords Don\'t match'];
        yield put(
            userError(err)
        )
        return;
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName };
        yield getSnapshotFromUserAuth(user, additionalData);
    } catch (err) {
        console.log(err);
    }
}

export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* resetPassword({ payload: { email } }) {
    try {
        yield call(handleResetPasswordAPI, email);
        yield put(
            resetPasswordSuccess()
        );
    } catch (err) {
        yield put(
            userError(err)
        );
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        //console.log(err);
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* fetchUsers() {
    try {
        const data = yield handleFetchUsers();
        yield put(
            setUsers(data)
        );
    } catch (err) {
        //console.log(err);
    }
}

export function* onFetchUsersStart() {
    yield takeLatest(userTypes.FETCH_USERS_START, fetchUsers);
}


export function* deleteUser({ payload }) {
    try {
        yield handleDeleteUser(payload);
        yield put(
            fetchUsersStart()
        );
    } catch (err) {
        //console.log(err);
    }
}

export function* onDeleteUserStart() {
    yield takeLatest(userTypes.DELETE_USER_START, deleteUser);
}

export function* updateUser({ payload }) {
    try {
        yield handleUpdateUser({ payload });
        yield put(fetchUsersStart());
    } catch (err) {
        console.log(err);
    }
}

export function* onUpdateUserStart() {
    yield takeLatest(userTypes.UPDATE_USER_START, updateUser);
}

export default function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutUserStart),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onGoogleSignInStart),
        call(onFetchUsersStart),
        call(onDeleteUserStart),
        call(onUpdateUserStart)
    ])
}