const app = require("../app")

const PORT = 3000;

//3000번 포트로 서버를 띄어주는 코드. listen은 서버를 띄어준다.
app.listen(PORT, () => {
    console.log("서버 가동");
});
