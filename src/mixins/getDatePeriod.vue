
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class getDatePeriod extends Vue {
    private dateList = [
        //数据
        {value: "08:00-08:30"},
        {value:"08:30-09:00" },
        {value:"09:00-09:30" },
        {value:"09:30-10:00" },
        {value:"10:00-10:30" },
        {value: "10:30-11:00" },
        {value:"11:00-11:30" },
		{value:"11:30-12:00" },
		{value:"12:00-12:30" },
		{value:"12:30-13:00" },
		{value:"13:00-13:30" },
        {value:"13:30-14:00" },
        {value:"14:00-14:30" },
        {value:"14:30-15:00" },
        {value:"15:00-15:30" },
        {value:"15:30-16:00" },
        {value: "16:00-16:30" },
		{value:"16:30-17:00" },
		{value:"17:00-17:30" },
		{value:"17:30-18:00" },
		{value:"18:00-18:30" },
		{value:"18:30-19:00" },
		{value:"19:00-19:30" },
		{value:"19:30-20:00" }
    ]
}
</script>

<style lang="scss" scoped>

</style>

