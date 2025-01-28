import { createHmac } from 'crypto';
import {
    AuthFlowType,
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export const handler = async (event) => {
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
    const CLIENT_SECRET = "1b9ugcedsfng5fbmsgsi723f2ogli8ahs80iv0mb39a65h7geqjk";
    const CLIENT_ID = "6o184j9jtqoppp23ga6vpm6ghg";
    const hasher = createHmac('sha256', CLIENT_SECRET).update(`${event.email}${CLIENT_ID}`);
    const secretHash = hasher.digest('base64');
    const command = new InitiateAuthCommand({
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
            USERNAME: event.email,
            PASSWORD: event.password,
            SECRET_HASH: secretHash,
        },
        ClientId: CLIENT_ID,
    });

    const user = client.send(command);
    return user;
};


// Response
// {
//     "$metadata": {
//         "httpStatusCode": 200,
//         "requestId": "4474fad1-291c-4774-b78e-6f930764781f",
//         "attempts": 1,
//         "totalRetryDelay": 0
//     },
//     "AuthenticationResult": {
//         "AccessToken": "eyJraWQiOiJxaEFnR0t4anRZYWJVWXU3Z0UwNllWRjZQNGFXSGUwVTdiSWFpdGFNOERvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNDk4NDQ5OC02MDQxLTcwYTctY2EyMC1jOGFjNTE0MjlmMzQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV82YkhZbnNNWDAiLCJjbGllbnRfaWQiOiI2bzE4NGo5anRxb3BwcDIzZ2E2dnBtNmdoZyIsIm9yaWdpbl9qdGkiOiJiM2U1NGJjZC04YTMzLTQ4MzMtYTRhYi05YzU3ODIyNDhmMWMiLCJldmVudF9pZCI6IjQ0NzRmYWQxLTI5MWMtNDc3NC1iNzhlLTZmOTMwNzY0NzgxZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjM4NTY4OTAsImV4cCI6MTcyMzg2MDQ5MCwiaWF0IjoxNzIzODU2ODkwLCJqdGkiOiJiNmJiNDQ1Ni00MjA1LTQzMmItYjFjOS0yMTFlMjc2ODFkNmMiLCJ1c2VybmFtZSI6IjE0OTg0NDk4LTYwNDEtNzBhNy1jYTIwLWM4YWM1MTQyOWYzNCJ9.iuD62hO8scclUI3fi4U7BQsklDgVC39hHjC8F6iOdfXKrv51l619N8X0jzbQ_aWDvmPGpvkSVZQWUsCRmQndI6n_Uj8Kxyi3Zk08q9fwQI2_xzPXVt2hTCY1znjfTP68p9Mt_E77-HZbnqZLEDRzGpLqdKBvr-zSC5hsVRZ2Ld52ItHNUENNt6VvcQGIgaph4R8hLMx77Hx6tv0EdBDTInQDYRUUoSfvhqNEXHMWi9f-ioN8dYcwUoPWGJvdk8w88IwDyt_gDjADnN13lkwASD5kvOw-YtgjnWTem0HiFc9eSqPX408itkaXI0RvES7aw67VwuVc2S2uHI8MvQ-YgQ",
//         "ExpiresIn": 3600,
//         "IdToken": "eyJraWQiOiJTMnAxM2NKcVBRbmRvaVhJcE5tR3d0WEEyQ1QrblVOQ01LV21QbzdMUys4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNDk4NDQ5OC02MDQxLTcwYTctY2EyMC1jOGFjNTE0MjlmMzQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfNmJIWW5zTVgwIiwiY29nbml0bzp1c2VybmFtZSI6IjE0OTg0NDk4LTYwNDEtNzBhNy1jYTIwLWM4YWM1MTQyOWYzNCIsIm9yaWdpbl9qdGkiOiJiM2U1NGJjZC04YTMzLTQ4MzMtYTRhYi05YzU3ODIyNDhmMWMiLCJhdWQiOiI2bzE4NGo5anRxb3BwcDIzZ2E2dnBtNmdoZyIsImV2ZW50X2lkIjoiNDQ3NGZhZDEtMjkxYy00Nzc0LWI3OGUtNmY5MzA3NjQ3ODFmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MjM4NTY4OTAsImV4cCI6MTcyMzg2MDQ5MCwiaWF0IjoxNzIzODU2ODkwLCJqdGkiOiJlOTFmOGZlNi05ZTQzLTQ4MjMtOTkzOC1mZWE5MjNmZDI2YzkiLCJlbWFpbCI6ImhzaW5ibHVlbW9vbkBnbWFpbC5jb20ifQ.bZopKCVr7srFXcCtLsfKBZbHTHPQ7cWrPNAGyIEWLoB6cCfASQcu6AIzFrhNCu9-vV0YdzlQ9c0dEWkJi9v72zwDBsVNNgnoaUKssZlKMiHq4TVTqaznBkEhtVgjW5osTiyPR6I69uTXlYOYZJHBgGTnnDZQVYH6MTll0XUvuv797cpEOvDuuDIAB9aw1lma68If9SJBdS2vika0nNZgf6YQChqWaIpRa-R5lrevjQgckS_ONLeTl3nTY2O6ouiYY4gBJC9Z9EGX_ng6R1a3tq8NXKe2QlGNpty6RpPx_rNLTrzW7ibApdOMZA1jL0BOKDxsxLTth9n6npQ9VP0tVQ",
//         "RefreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.V5Rt2U01zojtE0y3uNOhmPyhfId39z5TvWON9iQbL6lfGpPUNGana4cDADMyOYoaP9sjB44JVyzfpQ0CXbB230fgkJzQzUOYP4Qx-BfBl9vJFQuuch5_wkJmp9faHCGN45_I9vN9Lh9AnCCCTV84Q52GbYg3wty1x9L1XIfSv2imd0FCi7pZ18Eeuh2jQsKL5ZmZPgBEN8ccvXDkhzNi5B_79F6vATHRZmmqQodYConFpvGV3UdTpT8qF8M5B3XIDlTGhpSILozfXbgj3wJhLmV7FCeR7BPFoB6_NMbuaFSs6bjEvJEs3TQ8UuPoiK3djppTTrdOjjR7-ayrrWufkw.8Gv3Ya3UmJEyWX7G.c9eGms3EPJYK4cFDGpBmfq_T54xbNFfDMRhlnqGRxUyeivo-Xb_N2s2rhdqV50ad_L2hvLQOpD5551DgzhoZ6vt1n-I7u28vSn2f7qc_R-HHezoyYpQyX5mo0xfA1S_UrC-yujCFp0nkvoRUp1AHdI1NBklg7RMbjIkd8GrxrcDb6YD_hoC_llVanYHKdPeKLLx9DGDjD_0wyS2CsRbXrSjOxzM5k0rgTIMAr6RHyf1HdsJ0qrYFxsAQektAR3AVHuonuF-OsBuyjx-12rgayKew_tYUdoQ7ZFXrd6iRkZB8GvDytt1fc2R3w3Kb3DtpQ84kO18EN9eF1k6Ia7NtrE-FDw_C8vyTtgGPgp2C1hvtMc8ZPB3OxJmkw45opotbxIUwUdozek78s4Da1skDBJNgNyPzBPFAj4848ZInCkPZEjNv6BAqkmGtuVXh-HtT-pyXzZxut1MrKG-OtysYla-f0FpA8MaIUvbfO0w08VmiL6DmoIkZdTKMGSUWS6ketbCmG5G7uEh22nYuA8BvZtWSXVePITQMoiqp-7B7xgtqw-i5LXyNG6aiRKlM-MjaR6eWCBDnyL82wy7QJ_g_PNdLxaFbYvUy98binh40zEAe2kfFzap_aVYaXdoAjGcrqVKULpwKMZbS3DlPumP3E3e1uX0cJeijGfv6rhzQX2k26cRR21p5QVFLX0UdWLkom-AFFq5BtcQHaAgyhuBUAZHUoKF_YGoLkRRsJviP8Zi-7AqH9u4cOHe3MYk6fkELQpJZ_3WoIHMFlM8D1Iey12eMRFiwbFFQoLNsjTD79JoLsjWtnzMSSZdQLN8NN6OUqarRuyU9hRtf5gngLy0BKtQGbDZvr6997pi02GkdH3LbpXj9MJRmvjKdFogIove499U_fmxD2f9XJ5o0cXigqwAq3wKvsbR5bnasHsdpEonI0grnXVXH3xQBeyljgHe-FNOwT1j18wo935qSEYk9sVF0eohKWlMfA80mzr7uEuEBQsJM4BDJncLAB_Co6Q57jprX5Oe5eElbhbtHZ8nqMMpUZDEmrMOP9C_RkDbSSYJ2vzQElpGJa9Orfrs4N5uSG07bLThrBF6ZvF1flJgObfuFA-1wENMjcQSS8ICtV4HYeCnts_22NwWc9pVp790qGEXnmnDaa79n1m0Db5Xivosn7OSscuQgPPIMX_O3w6H7omFqev1oP3zv0akmzeI1wOQlya1NQyTfBMOhTKAnpQlFY8Ak9l0ymygOnt_6OyV-m1npLd3aSKBdQmDTFs_FztrAszxTwdX4WWObfTFbDThsKvrYGRy07iTOvxhzDJXc75JLQkaEuXMArg.JCeOHobHrAkZTofU5QBLQQ",
//         "TokenType": "Bearer"
//     },
//     "ChallengeParameters": {}
// }