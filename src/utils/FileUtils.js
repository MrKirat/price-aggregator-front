const createFileByBlobAndBuffer = (blob, buffer) => {
  return new File(buffer, 'search.mp3', {
    type: blob.type,
    lastModified: Date.now()
  });
}

const removeBase64Prefix = base64File => {
  return base64File.substr(base64File.indexOf(',') + 1);
}

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onload = function () {
      const fileSrc = reader.result
      resolve(removeBase64Prefix(fileSrc));
    };
  });
}

export { getBase64, removeBase64Prefix, createFileByBlobAndBuffer };