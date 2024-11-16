export const SERVICES_API = process.env.REACT_APP_HYGRAPH_SERVICES_API


export const getAllServices = `
query MyQuery {
  services {
    serviceNameEnglish
    serviceNameGerman
  }
}
`;