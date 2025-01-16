<template>
    <div v-if="filteredItems.length > 0">
        <input type="text" v-model="filter" placeholder="Filter by name" />
        <table>
            <thead>
                <tr>
                    <th>Hash</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.hash">
                    <td>{{ item.hash }}</td>
                    <td>{{ item.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <text>Fetching information..</text>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            items: [],
            filter: ''
        };
    },
    computed: {
        filteredItems() {
            const lowerCaseFilter = this.filter.toLowerCase();
            return this.items.filter(item => 
                (item.name && item.name.toLowerCase().includes(lowerCaseFilter)) || 
                (item.hash && item.hash.toLowerCase().includes(lowerCaseFilter))
            );
        }
    },
    mounted() {
        fetch(this.url)
            .then(response => response.text())
            .then(text => {
                this.items = text.split('\n').map(line => {
                    const parts = line.split(' - ');
                    return {
                        hash: parts[0] || '',
                        name: parts[1] || ''
                    };
                });
            });
    }
};
</script>

<style scoped>

</style>