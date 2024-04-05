let contador = 0;

document.getElementById('accederBtn').addEventListener('click', function() {
    document.getElementById('accederBtn').style.display = 'none';
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if(contador==13){
        contador=0;
    }else{
        contador++;
    }
    showSong(contador);
});

document.getElementById('prevBtn').addEventListener('click', function() {
    if(contador==0){
        contador=13;
    }else{
        contador--;
    }
    showSong(contador);
});

function showSong(x) {
    if(x==0){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/3lUQpvfWFcxZC3RYAVGE7F?utm_source=generator"
        document.getElementById('msg').textContent = "Elegí esta primera canción porque, si bien no es una canción de amor como tal, creo que representa muy bien la forma en que me siento a tu lado, jamás me habia sentido tan bien, tan ligero, tan completo."
    }else if(x==1){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/2Qn6WHJrY5Im82Jux8FboH?utm_source=generator"
        document.getElementById('msg').textContent = "Para este punto estoy más que convencido que no necesito nada ni a nadie más mientras te tenga a ti. Realmente lo quiero contigo, desde las cosas cursis y tranquilas, hasta las más tontas que se nos puedan ocurrir."
    }else if(x==2){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/3vWfEcRZC5nfQ2fLuvKqqE?utm_source=generator"
        document.getElementById('msg').textContent = "Te lo dije una vez y no me da miedo repetirlo: tu presencia, tu ser, y tu existir me recuerdan al calor y la luz del sol. Mi luz."
    }else if(x==3){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/6QPsWusy5itp7ip1hW7QNa?utm_source=generator"
        document.getElementById('msg').textContent = "Nada me hará cambiar de opinión, soy la persona más afortunada del planeta, pues te tengo a mi lado."
    }else if(x==4){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/1VhGRC4yzcDFBM4yQSpUGg?utm_source=generator"
        document.getElementById('msg').textContent = "Y reitero una vez más, eres lo mejor que me ha pasado, haría lo que fuera por ti, mi princesita."
    }else if(x==5){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/3curUGAfGYvGcBbE1k5Fyy?utm_source=generator"
        document.getElementById('msg').textContent = "Donde sea que estés, yo quiero estar, y si no quieres estar acá, creemos juntos un lugar para los dos."
    }else if(x==6){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/2VhY69P0Q15rHfEKaMlR5x?utm_source=generator"
        document.getElementById('msg').textContent = "Me has hecho disfrutar de las cosas más pequeñas, contigo he vuelto a vivir y disfrutarlo."
    }else if(x==7){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/0MJ5wKsPEeihONNfugHGy7?utm_source=generator"
        document.getElementById('msg').textContent = "Eres la persona más hermosa que existe, en todos los sentidos, me tienes vuelto loco y lo peor es que sigo desquiciándome cada vez."
    }else if(x==8){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/4VywXu6umkIQ2OS0m1I79y?utm_source=generator"
        document.getElementById('msg').textContent = "Quisiera tener las palabras para expresarte todo lo que significas para mí, estoy completamente enamorado."
    }else if(x==9){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/78zUxUPvONPgMIt46q5be6?utm_source=generator"
        document.getElementById('msg').textContent = "Creo que la letra lo resume. Sé que no soy la persona más fácil, que de repente hago las cosas mal y que debe ser cansado en ocasiones estar cerca de mí, pero haría lo que sea para que estés bien tú también. Bien conmigo."
    }else if(x==10){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/6fhG2KJgwO7CrNflRaRmvp?utm_source=generator"
        document.getElementById('msg').textContent = "Ni en un millón de años podría haber imaginado a alguien como tú, mucho menos encontrado a alguien así. Eres única, simplemente no hay nadie igual. Por eso (y otras cosas) me gustas tanto."
    }else if(x==11){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/6V41hvz0Iib8JYlb9gvwJp?utm_source=generator"
        document.getElementById('msg').textContent = "Quiero estar contigo la vida entera, realmente deseo hacer esto funcionar."
    }else if(x==12){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/7m4BsKrYkOFy3VNmAMu5bO?utm_source=generator"
        document.getElementById('msg').textContent = "Te amo te amo te amo. Eres todo para mí."
    }else if(x==13){
        document.getElementById('song').src = "https://open.spotify.com/embed/track/1aEsTgCsv8nOjEgyEoRCpS?utm_source=generator"
        document.getElementById('msg').textContent = "A veces tengo miedo, a veces soy muy ansioso. Solo tú me calmas. Felices siete meses, mi niña."
    }
};
