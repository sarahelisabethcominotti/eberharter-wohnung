export const DESCRIPTION_API = process.env.REACT_APP_HYGRAPH_DESCRIPTION_API

export const getDescription = `
query MyQuery {
  descriptions {
    descriptionEnglish
    descriptionGerman
  }
}
`;