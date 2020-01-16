import formCheck from "../common/formCheck";

export default () => {
    const btn = document.getElementById("submit");
    const input = document.getElementById("input");
    const check = formCheck(document.getElementById("form"));
    btn.onclick = () => {
        check();
        alert('btn 登入')
    }
    input.oninput = () => {
        check();
    }
}