export interface character {
  id: string,
  status: string,
  name: string,
  talents: {
      normalAtk: number,
      elementalSkill: number,
      elementalBurst: number,
      type: string,
      weeklyBossMaterial: string
  },
  region: string,
  characterImg: {
    imgPath: string,
    imgAlt: string
  },
  description: string
}

const api = {
  async findCharacters(){
    try {
      const response: Response = await fetch("http://localhost:3000/characters");
      console.log(response)
      return await response.json();
    } catch(err) {
      throw err;
    }
  }
}

export default api;
//Link para fazer modal:
// https://www.w3schools.com/howto/howto_css_modals.asp