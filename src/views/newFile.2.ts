import axios from 'axios';

export default (await import('vue')).defineComponent({
data() {
return {
email: '',
password: '',
username: '',
isSubmitting: false,
};
},
methods: {
async login() {
try {
this.isSubmitting = true;
const response = await axios.post('http://localhost:8080/api/v1/login', {
email: this.email,
password: this.password,
});
console.log(response.data);
} catch (error) {
console.error('Error:', error);
}
finally {
this.isSubmitting = false;
}
},
},
});
