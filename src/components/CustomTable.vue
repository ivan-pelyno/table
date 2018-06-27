<template>
    <tbody>
    <tr v-for="(item , index) in data" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.gender == "0" ? 'male' : 'female'}}</td>
        <td>{{item.company}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.address}}</td>
        <td>{{item.about}}</td>
        <td>{{item.registered.split(" ")[0]}}</td>
    </tr>
    </tbody>
</template>
<script>
    export default {
        props: ["data"],
        data(){
            return {}
        }

    }
</script>

