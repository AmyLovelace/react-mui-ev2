import Swal from 'sweetalert2';

export const alertSwal = async(icon, title, text, timer) => {
    Swal.fire({
        position: 'center',
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: timer,
        background: '#1e283a',
        color: '#fff',
        // toast: true,
        // animation: false
    })
};

export const alertConf = async (question) => {
    const result = await Swal.fire({
        title: question,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'orange',
        cancelButtonText: 'Volver',
        confirmButtonText: 'Continuar',
        background: '#1e283a',
        color: '#fff',
        // animation: false,
        // toast: true
      });

      return result.isConfirmed;
};