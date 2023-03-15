import React, { useState } from 'react'
import pdfjsLib from 'pdfjs-dist';

function FileUpload(file){
    var reader = new FileReader();
    reader.onload = (evt) => {
        const buffer = evt.target.result;
        console.log("buffer", buffer);
        console.log("readyState", reader.readyState)
        ab2str(buffer);
        // var loadingTask = pdfjsLib.getDocument(buffer);
        // loadingTask.promise.then(function(pdf) {
        //   console.log(pdf)
        // });
    }; 
    reader.readAsArrayBuffer(file);

    function ab2str(buf) {
        // console.log(String.fromCharCode.apply(null, new Uint8Array(buf)))
        const text = new TextEncoder().encode(buf);
        console.log(text)
      }
}

export default FileUpload