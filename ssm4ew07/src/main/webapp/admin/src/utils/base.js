const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm4ew07/",
            name: "ssm4ew07",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4ew07/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "奖助学金管理系统"
        } 
    }
}
export default base
