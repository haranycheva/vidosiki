

export const KEY__TIME = "videoTime";
export const KEY__DONATE = "donated";


function save(value, key){
    const valueJSON = JSON.stringify(value);
    return localStorage.setItem(key, valueJSON)
}

function load(key){
    const saveLocal = localStorage.getItem(key) 
    ? JSON.parse(localStorage.getItem(key))
    : undefined;
    return saveLocal;
}

export default{
    save,
    load,
}