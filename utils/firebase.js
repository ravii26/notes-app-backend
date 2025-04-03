import admin from "firebase-admin";
const serviceAccount = {
  type: "service_account",
  project_id: "notes-app-bba20",
  private_key_id: "66f7cd912aea1a7cfba793e46f5e87512083a338",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMK+Ad9AYh3Xjg\ncuJim/pw84Wlss/RFrbYe4vNt+SBghwEmGHxB93YWhGozpHxYdaX8sB0OjKqMNqb\nFTZIPXIMhBytVzlMkP5fyvl4pXWBK7462qKPkAuh9kWgrCI2SjH+WVPc8p8oy52w\newxoLp+gmAkBwmVwfzvCF7jk64XxLQQ+qsyFmzsDAFys/WRSUNWoID8/mB6k2Jhb\nDhIP7Amr6d1kFip/g8b+qVYTj4XV8F49vHZUXwSHV3rfDXnBiFtM2NG7qNGa/Eei\nva48FHqvs2aWczNhLenHJixiqS1HxXFbBrJ528bxsPZQxZTE9m32avOvt2WWeKGy\nrmF/dTDlAgMBAAECggEAGrKnDwukjKObBZCIQVg/nqr9YC46Zg84ECVRofAouXWj\nx8cMUZoTfJHEiuQeKef/CWYFG/2rN92FDG/w5e/g/Ll+zXzhIX25QZn3VrseGyq2\n6JfD142As+hR8QFpRNudX3LbWEJCpTFA+L2SYQItvfB7hwceQCBnFkmHVCnnHSLn\nw0JbCLOSXcpO47H9JrrljeT8z5d7XYECSN3JeUIFBPtkpUo9u6pKkigki1HZul/O\nqQ3738uW7o8JPsO2BZ0Mdk3nmEqjLKgQURuds1tylUi41sDeULYsb8B0+/iIVCVP\n/grXz172e3WpjhnxAxfDgygNTbsAI0ZP/pOrSi+SiQKBgQDqCSPAWUpvgCVOecoc\n9yj2qFRIMn6EVRQSGrE2/UAaqWzgSEI7ol1aDgip74eDavZaCm4jDHEYx+KI26vw\nNvS7ZxQPdW0IrFSuXPcgr+OsQkCW4U0boqNTzyftAfC97trNMpPkQZUGzcvhNZxs\nEOT5pmq3Ah7QoRkcp4S8EIAOvQKBgQDfVTnob7hDjO60ypzgDOVSUiGxanzZGLlO\nXwKA7mgVuXXDYc6/3qaE8a6FEZDU5JYqnt9hg6ztK3v4pLV2iF8Xbei6eMVZTgfP\nuZu4sRnnRF9DerJwcscLGeEVvsI1kYz24Rw/MuI5+Fnxe5MNvg9M5eoK/d6MF9M5\nDR1MRK9BSQKBgHIPKkFgQwq8ZXItoPck7e3oc8sL8OUFodaA88Vc/5T+5XUZQk5V\n/zEYjdhkSKMfyhhv5OVn9uag5CLXDKDx56w9vGUcUZtcgZjI7hgcINWfJGNkQnQp\ne3gpCchUncOzWSeQcstXuw2p1qdXvXhdc3rIRFIU0nfTS63PZr1RPVfxAoGBAIEW\nqQ8iLFbXSk6z4nNa4N5xXMpI6/ssYEfdgPv3UbBk753Mlg2va37il2aRHa8ApY/j\nHukljDnWbaTtx3nJH3XScLgAAMo64Sb/ePQLYhacHZhKfoOixEw1XDYOegEurVUy\nDvq0tbCeTZbYP8qstflT17EcxpshVlTesLWZ6dcJAoGAI092IRGqJODwoFaPWo5B\nLHXraGqx/IdBl1WH6v6mwVM4Eyp9do+hBeNxthcP2OWE3K4mLF45osDxmBJ0tqcD\nLrvTsx3bSgBa/des1AlMW76p2g1Eza3RQwi7culGZGCUhb1OXiSccG3nxTiNeFKg\nn/sxXjDjpRTjkPVR61uJvSw=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-lwz7f@notes-app-bba20.iam.gserviceaccount.com",
  client_id: "105035775266857218530",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lwz7f%40notes-app-bba20.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
