import { css } from '@emotion/core'

/*

All grid code is placed in a 'supports' rule (feature query) at the bottom of the CSS (Line 310). 

The 'supports' rule will only run if your browser supports CSS grid.

Flexbox and floats are used as a fallback so that browsers which don't support grid will still recieve a similar layout.

*/

const galleryStyles = css`
  /* Base Styles */
  .gallery-wrapper {
    font-size: 1px;
    box-sizing: border-box;
  }

  .gallery-container {
    max-width: 75.5rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Profile Section */

  .profile {
    padding: 4rem 0;
  }

  .profile::after {
    content: '';
    display: block;
    clear: both;
  }

  .profile-image {
    float: left;
    width: calc(33.333% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
  }

  .profile-image img {
    border-radius: 50%;
    width: 152px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }

  .profile-user-settings,
  .profile-stats,
  .profile-bio {
    float: left;
    width: calc(66.666% - 2rem);
  }

  .profile-user-settings {
    margin-top: 1.1rem;
  }

  .profile-user-name {
    display: inline-block;
    font-size: 2.2rem;
    font-weight: 300;
  }

  .profile-edit-btn {
    font-size: 0.8rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
    color: #333;
  }

  .profile-edit-btn:focus {
    outline: none;
  }

  .profile-edit-btn:hover {
    color: #e53132;
  }

  .profile-edit-btn:visited {
    color: #333;
  }

  .profile-settings-btn {
    font-size: 2rem;
    margin-left: 1rem;
  }

  .profile-stats {
    margin-top: 2.3rem;
    margin-bottom: 2rem;
  }

  .profile-stats li {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
  }

  .profile-stats li:last-of-type {
    margin-right: 0;
  }

  .profile-bio {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2.3rem;
  }

  .profile-real-name,
  .profile-stat-count,
  .profile-edit-btn {
    font-weight: 600;
  }

  /* Gallery Section */

  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 3rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }

  .gallery-item {
    position: relative;
    height: 99%;
    flex: 1 0 22rem;
    margin: 0 1rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 0.4rem;
  }

  .gallery-item .gatsby-image-wrapper,
  .gallery-item-info {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 0.4rem;
  }

  .gallery-item:hover .gatsby-image-wrapper,
  .gallery-item-info {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
    transform: scale(1.04);
  }

  .gallery-item:focus {
    outline: none;
  }

  .gallery-item-likes {
    margin-right: 2.2rem;
  }

  .gallery-item:hover .gallery-item-info,
  .gallery-item:focus .gallery-item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .gallery-item-info {
    display: none;
  }

  .gallery-item-info li {
    display: inline-block;
  }

  .gallery-item-info ul {
    padding: 0;
  }

  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Media Query */

  @media screen and (max-width: 40rem) {
    .profile {
      display: flex;
      flex-wrap: wrap;
      padding: 4rem 0;
    }

    .profile::after {
      display: none;
    }

    .profile-image,
    .profile-user-settings,
    .profile-bio,
    .profile-stats {
      float: none;
      width: auto;
    }

    .profile-image img {
      width: 7.7rem;
    }

    .profile-user-settings {
      flex-basis: calc(100% - 10.7rem);
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    .profile-user-name {
      font-size: 2.2rem;
    }

    .profile-edit-btn {
      order: 1;
      padding: 0;
      text-align: center;
      margin-top: 1rem;
    }

    .profile-edit-btn {
      margin-left: 0;
    }

    .profile-bio {
      font-size: 1.4rem;
      margin-top: 1.5rem;
    }

    .profile-edit-btn,
    .profile-bio,
    .profile-stats {
      flex-basis: 100%;
    }

    .profile-stats {
      order: 1;
      margin-top: 1.5rem;
    }

    .profile-stats ul {
      display: flex;
      text-align: center;
      padding: 1.2rem 0;
      border-top: 0.1rem solid #dadada;
      border-bottom: 0.1rem solid #dadada;
    }

    .profile-stats li {
      font-size: 1.4rem;
      flex: 1;
      margin: 0;
    }

    .profile-stat-count {
      display: block;
    }
  }

  /*

The following code will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox & floated styling. 

*/

  @supports (display: grid) {
    .profile {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: repeat(3, auto);
      grid-column-gap: 3rem;
      align-items: center;
    }

    .profile-image {
      grid-row: 1 / -1;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
      grid-gap: 2rem;
    }

    .profile-image,
    .profile-user-settings,
    .profile-stats,
    .profile-bio,
    .gallery-item,
    .gallery {
      width: auto;
      margin: 0;
    }

    .profile-stats {
      margin-bottom: 10px;
    }

    @media (max-width: 40rem) {
      .profile {
        grid-template-columns: auto;
        grid-row-gap: 1.5rem;
      }

      .profile-image {
        grid-row: 1 / 2;
      }

      .profile-user-settings {
        display: grid;
        grid-template-columns: auto;
        grid-gap: 1rem;
        text-align: center;
      }

      .profile-edit-btn,
      .profile-stats,
      .profile-bio {
        grid-column: 1 / -1;
      }

      .profile-user-settings,
      .profile-edit-btn,
      .profile-settings-btn,
      .profile-bio,
      .profile-stats {
        margin: 0;
        text-align: center;
      }
    }
  }
`

export default galleryStyles
