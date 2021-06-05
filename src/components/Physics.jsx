import React from 'react'
import {Integrator, 
        Euler, 
        ImprovedEuler, 
        Verlet, 
        Particle, 
        Physics, 
        Vector, 
        Spring, 
        Behaviour, 
        Attraction, 
        Collision, 
        ConstantForce, 
        EdgeBounce, 
        EdgeWrap, 
        Wander, 
        Gravity} from '../../modules/coffeePhysics';

const Physics = () => {
    const physics = new Physics();
    physics.integrator = new Verlet();

    const avoidMouse = new Attraction();
    const pullToCenter = new Attraction();

    const collision = new Collision()

    return (
        <div>
            
        </div>
    )
}

export default Physics