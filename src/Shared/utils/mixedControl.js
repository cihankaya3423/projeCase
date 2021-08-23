// random değer üretiyor

export const randomId = () => {
  return Math.random().toString(36).substring(2, 100);
};

// email formatında olup olmadığını control ediyor
export function validateEmail(email) {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// belirli yıllar arasını array dönme selectbox gibi
// 2000 number değer yollanır ve günümüze kadar döner.
export const yearSelectBox = (startDate) => {
  const newDate = new Date();
  const thisYear = newDate.getFullYear();
  const arrayDate = [{ id: startDate, name: startDate }];
  for (let index = startDate; index < thisYear; index++) {
    arrayDate.unshift({ id: arrayDate[0].id + 1, name: arrayDate[0].id + 1 });
  }
  return arrayDate;
};

//find yapıyor
export function findData(data, propOne, value) {
  if (data && propOne && value) {
    return data.find((item) => {
      return (
        String(item[propOne])?.toLocaleLowerCase() ===
        String(value).toLocaleLowerCase()
      );
    });
  }
  return false;
}

// blanck ile sayfa açıyor
export function windowOpenBlank(url) {
  if (url) {
    window.open(
      url,
      "_blank",
      "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
    );
  }
}

export function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
