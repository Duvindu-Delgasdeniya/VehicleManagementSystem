import { confirmAlert } from "react-confirm-alert";
import { toast } from 'react-toastify';
class Config {
    constructor () {
                // this.host = "https://timetable-prod.herokuapp.com";
                // this.port = "http://localhost:8070/"
                this.host = "http://127.0.0.1";
                this.port = ":8070";
            }

    async showAlert(_msg, _title) {
      await confirmAlert({
        title: _title || "Alert",
        message: _msg,
        buttons: [
          {
            label: "Ok"
          }
        ]
      });
  
      return 0;
    }

    async showAlert2(_msg, _title) {
      await confirmAlert({
        title: _title || "",
        message: _msg,
        buttons: [
          {
            label: "Ok"
          }
        ]
      });
  
      return 0;
    }

    setImage(url){
      return `${this.host}${this.port}/${url.replace(/\\/g, '/')}`
    }

    setToast(msg){
      toast.info( msg, {
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
      });
    }

    setErrorToast(msg){
      toast.error( msg, {
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
      });
    }
    setDeleteConfirmAlert(title , msg , confirm , cancel ){
      confirmAlert({
        title: title,
        message: msg,
        buttons: [
          {
            label: 'Yes',
            onClick: () => confirm()
          },
          {
            label: 'No',
            onClick: () => cancel()
          }
        ]
      });
    }
  
    
  }
  
  var obj = new Config();
  export default obj;
  
