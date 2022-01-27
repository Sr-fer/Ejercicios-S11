function main() {
var enemigo1 = new Enemigo 
enemigo1.setVida(100)
enemigo1.setNivel(2) 
enemigo1.setAtaque(4) 
enemigo1.setNombre("Ruperto")
var heroe1 = new Heroe
heroe1.setVida(100)
heroe1.setExperiencia(12)
heroe1.setNivel(2)
heroe1.setAtaque(10) 
heroe1.setNombre(prompt("Elige el nombre de tu heroe"))
var ultimo_turno = 0
while(enemigo1.vidaomuerte() && heroe1.vidaomuerte()) { 
if(ultimo_turno == 1 || ultimo_turno == 0) {
enemigo1.recibirDanio(enemigo1.vida, heroe1.hacerDanio())
console.log("Enemigo " + enemigo1.vida)
ultimo_turno = -1  
}
if(ultimo_turno == -1) { 
heroe1.recibirDanio(heroe1.vida, enemigo1.hacerDanio())
console.log("Heroe " + heroe1.vida)
ultimo_turno = 1
}
} 
heroe1.recibirExperiencia(enemigo1.recibirExperiencia(1))
console.log(heroe1)
console.log(enemigo1)
}

main()

