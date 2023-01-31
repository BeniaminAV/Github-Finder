class Github {
    constructor() {
      this.client_id = '466de09e9b42785f4e21';
      this.client_secret = '5f0c1d9357ef07f51da3c00b3bef123b2c1093c6';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';

    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }
