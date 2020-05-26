var imagenes = [ 'fotos/camping_cuatro.jpg', 'fotos/camping_tres.jpg', 'fotos/camping_dos.jpg', 'fotos/camping_cinco.jpg', 
                'fotos/camping_seis.jpg', 'fotos/cabaña.jpg', 'fotos/cocina.jpg', 'fotos/comedor.jpg', 'fotos/habitacion.jpg', 
                'fotos/pileta.jpg'],
    cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.boton_atras'),
            adelante = contenedor.querySelector('.boton_adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){
            if (cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else{
                img.src=imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if(tgt == adelante){
            if (cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else{
                img.src=imagenes[0];
                cont = 0;
            }

        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
});