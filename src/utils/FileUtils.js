const removeBase64Prefix = base64Image => {
  return base64Image.substr(base64Image.indexOf(',') + 1);
}

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onload = function () {
      const imageSrc = reader.result
      resolve(removeBase64Prefix(imageSrc));
    };
  });
}

export { getBase64, removeBase64Prefix };