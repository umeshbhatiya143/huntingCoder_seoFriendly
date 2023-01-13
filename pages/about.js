import React from 'react'
import Styles from '..//styles/About.module.css'

const About = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.center}>About Hunting Coder</h1>
      <h2>Introduction</h2>
      <p className={Styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quaerat laboriosam aliquid voluptatibus porro, eaque rem ab architecto officiis accusamus qui ipsa cupiditate expedita autem fugiat! Reprehenderit laborum dicta quibusdam numquam ullam molestias est iure voluptates quis alias recusandae, praesentium perferendis ex, impedit officia ducimus atque eos sed. Earum quod laudantium ratione nostrum deserunt eligendi, esse sint accusamus saepe voluptas natus minus sequi necessitatibus pariatur eaque consectetur laboriosam quo consequuntur. Sed quas labore, suscipit iusto nemo dicta consectetur totam exercitationem, quam atque accusantium impedit aliquam? Laborum totam porro non nostrum aspernatur fuga iusto, odit numquam doloribus. Consectetur saepe libero nulla quibusdam aspernatur necessitatibus. Ab vel labore, velit, natus sint animi sequi atque voluptas eum repellendus alias voluptatem cumque ex deserunt necessitatibus officia. In alias facere id voluptas explicabo maxime sapiente nam asperiores earum quam sed soluta exercitationem, illo odit nisi vel adipisci consequuntur atque consectetur quidem. Adipisci delectus quo, voluptatum dolores odio quod eligendi? Ipsum assumenda ut error voluptatibus porro, tenetur nostrum? Odit inventore quia aperiam odio vel dicta rem quasi expedita voluptatibus, maiores eius enim facilis quas autem repellat eveniet doloribus quidem possimus quis quam ipsam cumque impedit ducimus sapiente. Provident saepe ipsa quos</p>
      <h2>Services Offered</h2>
      <p className={Styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sapiente rerum totam reprehenderit quibusdam ipsam tempora nulla repellendus non inventore, autem aliquam nam amet fuga voluptas pariatur impedit obcaecati exercitationem aperiam? Saepe ducimus iusto rem quo dolor, adipisci fuga placeat odit officia iure quia voluptatem excepturi. Modi, deserunt corporis! Magnam.</p>
      <p className={Styles.content}>We Offer the following services
      <style jsx>
        {
          `
          ul{
            margin-left:40px
          }
          `
        }
      </style>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
        <li>Service 4</li>
        <li>Service 5</li>
        <li>Service 6</li>
      </ul>
      </p>
      <h2>Contact us</h2>
      <p className={Styles.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam suscipit voluptates sed fuga, nulla minus, odit iste nam optio earum asperiores expedita adipisci eos unde architecto! Ad sequi voluptates necessitatibus accusantium autem quia inventore, suscipit numquam illo voluptatibus, dolorem quo eligendi corrupti. Perferendis molestias, maxime officia deserunt laboriosam ipsam accusantium!</p>
    </div>
  )
}

export default About
