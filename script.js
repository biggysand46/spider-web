const container = document.getElementById("container");
const circle_numbers = 200;
const max_distance = 100;

function random_number(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < circle_numbers; i++) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    random_x = random_number(document.body.offsetWidth);
    random_y = random_number(document.body.offsetHeight);

    circle.setAttribute('r', '2');
    circle.setAttribute('cx', random_x.toString());
    circle.setAttribute('cy', random_y.toString());
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('fill', 'white');
    circle.setAttribute('class', 'circle');

    container.appendChild(circle);
}

var circles = document.getElementsByClassName("circle");

for (let i = 0; i < circle_numbers; i++) {
    cx = parseInt(container.children[i].getAttribute("cx"));
    cy = parseInt(container.children[i].getAttribute("cy"));

    line = document.createElementNS('http://www.w3.org/2000/svg','line');

    line.setAttribute('x1', cx);
    line.setAttribute('y1', cy);
    line.setAttribute('x2', cx);
    line.setAttribute('y2', cy);
    line.setAttribute("stroke", "white");
    line.setAttribute("class", "liner");

    container.append(line);
}

document.addEventListener("mousemove", function(event) {
    mx = event.clientX;
    my = event.clientY;
    for (let i = 0; i < container.children.length; i++) {
        if (container.children[i].classList == "liner") {
            line = container.children[i];

            x1 = parseInt(line.getAttribute("x1"));
            y1 = parseInt(line.getAttribute("y1"));

            distance = Math.sqrt(((x1-mx)**2) + ((y1-my)**2));

            if (distance <= max_distance) {
                line.setAttribute('x2', event.clientX);
                line.setAttribute('y2', event.clientY);
            } else {
                line.setAttribute('x2', x1);
                line.setAttribute('y2', y1);
            }
        }
    } 
});