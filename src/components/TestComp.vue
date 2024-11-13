<template>
  <div>
    <button @click="loginWithGoogle">Log in to Google Photos</button>
    <div v-if="photos.length">
      <h2>Your Google Photos</h2>
      <div v-for="photo in photos" :key="photo.id" class="photo">
        <img :src="photo.baseUrl" :alt="photo.filename" width="200" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      photos: [],
      accessToken: null,
    };
  },
  methods: {
    loginWithGoogle() {
      const clientId = '962686459450-g7qami7ugqmr4d56fc9c93h60glv7e2k.apps.googleusercontent.com'; // Replace with your OAuth Client ID
      const redirectUri = 'http://localhost:8080';// URL to redirect back to
      const scope = 'https://www.googleapis.com/auth/photoslibrary.readonly';
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

      // Redirect user to Google login
      window.location.href = authUrl;
    },
    async fetchPhotos() {
      try {
        const response = await axios.get(
          'https://photoslibrary.googleapis.com/v1/mediaItems',
          {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            },
          }
        );
        this.photos = response.data.mediaItems || [];
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    },
  },
  async mounted() {
    // Check for access token in URL hash
    const hash = window.location.hash;
    if (hash.includes('access_token')) {
      this.accessToken = new URLSearchParams(hash.substring(1)).get(
        'access_token'
      );

      // Clear the access token from URL to avoid security issues
      window.history.replaceState({}, document.title, window.location.pathname);

      // Fetch photos if access token is available
      if (this.accessToken) {
        await this.fetchPhotos();
      }
    }
  },
};
</script>

<style>
.photo {
  margin: 5px;
  display: inline-block;
}
img {
  border-radius: 8px;
}
</style>
