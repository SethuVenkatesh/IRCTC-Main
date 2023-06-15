
const characters = "abcdefghijklmnopqrstuvwxyz1234567890@#$=&ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generateCaptcha = (length) => {
      let result = '';
      const characterLength = characters.length;
      for(let i=0;i<length;i++)
      {
          result += characters.charAt(Math.floor(Math.random() * characterLength));
      }
      return result        
}
    


