<template>
    <div>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </div>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
    components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ]
        };
    },
};
</script>
