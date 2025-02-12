export function RenderContent(){


  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `Halo Semua, Saya`,
    name: 'Gilang Dafa',
    profilePhoto: 'foto-profile.jpg',
    welcomeTxt: 'Selamat Datang di Portofolio Saya',
    Linkedin: 'https://www.linkedin.com/in/gilang-dafa-ardani-097423340/',
    tiktokLink: 'https://www.tiktok.com/@m1n1rocket',
    instagramLink: 'https://www.instagram.com/gilangdafa_/',
    githubLink: 'https://github.com/GilangDafa10'
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.Linkedin}">
          <img src="images and icons/icons/linkedin.png" alt="fb icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="images and icons/icons/tik-tok.png" alt="tiktok icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.githubLink}">
          <img src="images and icons/icons/github (2).png" alt="YT icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="images and icons/icons/instagram (1).png" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="images and icons/images/${homeDetails.profilePhoto}"
          alt="profile img" />
      </div>
    </div>
  `;
  
  const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
    




   // ----------------RENDERING ABOUT SECTION-------------------//
   const aboutDetails = {
    myPhoto: 'foto-profile.jpg',
    aboutMeFirstPrgrph: `Hi! I'm Gilang Dafa, a computer science and graphic design student. I love learning new things about IT and design, turning complicated codes into interesting projects and learning web design.`,
    aboutMeSecondPrgrph: `Aside from Programming, I also design code-based wallpapers and build unique portfolio websites that showcase my technical skills and artistic touch.`
   }

   const aboutHTML = `
    <h2 class="section-name about">ABOUT ME <span class="line"></span></h2>
    <div class="container">
      <div>
        <img
          class="profile-pic"
          src="images and icons/images/${aboutDetails.myPhoto}"
          alt="profile img" />
      </div>
      <div class="about-self scroll-reveal">
        <p class="first-paragraph">
          <span>${aboutDetails.aboutMeFirstPrgrph}</span>
        </p>
        <br />
        <p class="second-paragraph">
          <span>${aboutDetails.aboutMeSecondPrgrph}</span>
        </p>
      </div>
    </div>
   `

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;




    // ----------------RENDERING SKILLS SECTION-------------------//

    const skills = [
      { iconName: "html.png", skillName: "HTML" },
      { iconName: "CSS.png", skillName: "CSS" },
      { iconName: "js.png", skillName: "JavaScript" },
      { iconName: "java.png", skillName: "Java"},
      { iconName: "php.png", skillName: "PHP"},
      { iconName: "mysql.png", skillName: "MySQL"},
      { iconName: "npm.png", skillName: "Npm"},
      { iconName: "Git.png", skillName: "Git" },
      { iconName: "github (2).png", skillName: "GitHub" },
    ];

    const skillHTML = `
        <h2 class="section-name"><span class="line"></span> SKILLS</h2>
          
          <div class="skills-container d-flex">
          </div>
    `

  const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
  
  let skillCard = ''
  skills.forEach(skill => {
   skillCard += `<div class="skill">
    <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
    <p class="skill-name">${skill.skillName}</p>
  </div>`
  });
  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;




  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    heading: ' CONNECT WITH ME',
    subheading: 'Let’s Make Something Cool Together',
  }
  const contactHTML = `
    <h2 class="section-name">${contactDetails.heading}</h2>
    <p class="subheading">${contactDetails.subheading}</p>
    <form class="f-flex">
      <div class="input-container">
        <input class="input name" type="text" placeholder="Name" required />
        <input class="input email" type="email" placeholder="Email" required/>
      </div>

      <div class="txt-area-btn-container">
        <textarea name="Message-me" class="input" placeholder="Enter your Messsage"></textarea> 
        <button id="submit-btn">Submit</button>
      </div>
    
    </form>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
}
