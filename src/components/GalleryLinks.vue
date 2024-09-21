<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-start gap-3 overflow-x-scroll flex-nowrap ws-nowarp"
            style="font-size: 14px; font-weight: 500;" id="scroll" role="tablist">
            <RouterLink class="nav-link ws-nowarp rounded-0" style="border: 1px solid var(--bg-primary); color: var(--bg-primary)" v-for="(link, index) in links" :key="index"
                :to="{ name: link.route }" :class="{ active: $route.name === link.route }">
                {{ link.label }}
            </RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'GalleryLinks',
    data() {
        return {
            links: [
                { route: 'Gallery-Office', parent: "Gallery", label: 'Office' },
                { route: 'Gallery-Customer', parent: "Gallery", label: 'Customers' },
                { route: 'Gallery-Doctors', parent: "Gallery", label: 'Doctors' },
            ]
        }
    },
}
</script>

<style scoped>
.active {
    background-color: var(--bg-primary) !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
</style>
