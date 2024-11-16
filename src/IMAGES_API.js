export const IAMGES_API = process.env.REACT_APP_HYGRAPH_IMAGES_API


export const getAllImages = `
query MyQuery {
  images {
    altEnglish
    altGerman
    image {
      url
    }
  }
}
`;