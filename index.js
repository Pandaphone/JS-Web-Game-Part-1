function newImage(url, mLeft, mBottom){
    let item = document.createElement('img')
item.src = url
item.style.position = 'fixed'
item.style.left = mLeft + 'px'
item.style.bottom = mBottom + 'px'
document.body.append(item)
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)

newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, mLeft, mBottom){
    let object = document.createElement('img')
object.src = url
object.style.position = 'fixed'
object.style.left = mLeft + 'px'
object.style.bottom = mBottom + 'px'
document.body.append(object)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)


