<template>
    <div><br/>
        <table class="table">
            <tr>
                <th>2012-2013</th>
                <td>Developpeur PHP / MySQL (contrat de professionnalisation )</td>
                <th>Gencontact</th>
            </tr>
            <tr>
                <th>2013-2013</th>
                <td>Developpeur PHP / MySQL (contrat de professionnalisation )</td>
                <th>Gencontact</th>
            </tr>
            <tr>
                <th>2014-2015</th>
                <td>Developpeur Web</td>
                <th>Sky Agency</th>
            </tr>
            <tr>
                <th>2016</th>
                <td>Developpeur Web</td>
                <th>S2IR</th>
            </tr>
            <tr>
                <th>2017</th>
                <td>Developpeur PHP / Drupal</td>
                <th>Dillitrust</th>
            </tr>
            <tr>
                <th>2021-2022</th>
                <td>Analyste Programmeur</td>
                <th>DSC</th>
            </tr>
        </table>
    </div>
</template>
<script lang="ts">
export default {
	name: 'profil-pro',
    components:{
    },
    created () {
        this.$root.h1_title = 'Parcours Professionnel';
    }
}
</script>