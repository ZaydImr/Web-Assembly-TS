import { add } from "./build/release.js";

        let getSum = () => {
            clearErr();
            clearRes();
            let elementNb1 = document.getElementById('nb1');
            let elementNb2 = document.getElementById('nb2');

            if((!elementNb1.value && elementNb1.value !== 0 ) || 
                (!elementNb2.value && elementNb2.value !== 0)){
                document.getElementById('errMsg').innerHTML = 'The both numbers have to be filled with numbers!';
                return;
            }

            document.getElementById('resMsg').innerHTML = 'Result <small style="color:green;">(calculated with WebAssebmly)</small>: ' + add(elementNb1.value, elementNb2.value);
        }

        let clearErr = () => {
            document.getElementById('errMsg').innerHTML = '';
        }
        let clearRes = () => {
            document.getElementById('resMsg').innerHTML = '';
        }

        document.querySelector('#submitBtn').addEventListener('click', getSum);
        document.querySelector('#nb1').addEventListener('keydown', clearErr);
        document.querySelector('#nb2').addEventListener('keydown', clearErr);