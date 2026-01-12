import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  customClass: {
    popup: "custom-loading-popup", // Added custom class for the popup
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    popup: "custom-loading-popup",
    confirmButton:
      "bg-blue-500 hover:bg-blue-500/80 max-w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center",
    cancelButton:
      "bg-red-500  hover:bg-red-500/90 max-w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center",
  },
  buttonsStyling: false,
});

export const swalLoading = async (isLoading: boolean) => {
  if (isLoading) {
    await Swal.fire({
      title: "Now loading",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: "custom-loading-popup",
      },
      // Add a width parameter if desired, like:
      width: "400px", // Customize the width here
    });
  } else {
    Swal.close(); // Closes the loading alert
    // console.log("Loading stopped");
  }
};
