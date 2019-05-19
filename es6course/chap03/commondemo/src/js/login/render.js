export default (container) => {

    const tpl =
        `<form id="form"> 
        <input id="input" name="unmae" type="text">
        <input name="passwrod" type="password">
        <input id="submit" value="登人" type="submit">
        </form >`
    container.innerHTML = tpl;
}