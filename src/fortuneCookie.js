import fetch from 'node-fetch';

export class FortuneCookie {

    async getFortuneCookie() {

        const response = await fetch("http://yerkee.com/api/fortune/wisdom", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        })
        
        const fortuneCookieResponse = await response.json()
        return fortuneCookieResponse
      }

}