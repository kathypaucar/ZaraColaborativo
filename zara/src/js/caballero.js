import '../css/style.css'; 
import 'flowbite';

const banner = document.querySelector("#banner");
const cambiarBanner = () =>{
    
    if(banner.innerText === "ENVÍO GRATUITO EN PEDIDOS SUPERIORES A $50"){
        banner.innerText= "REBAJAS HASTA EL 50% - COMPRA HOY :)"
        //cambiar el back con clases tailwind
        banner.classList.remove('bg-black');
        banner.classList.add('bg-red-700');
    }else{
        //volver al estado original
        banner.innerText= "ENVÍO GRATUITO EN PEDIDOS SUPERIORES A $50"
        banner.classList.remove('bg-red-700');
        banner.classList.add('bg-black');
    }
}

banner.addEventListener('click', cambiarBanner);