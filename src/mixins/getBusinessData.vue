
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class getBusinessData extends Vue {
    private dataList = [
      {
        bussType: "companyLoanAudit",
        kindPicture: require("@/assets/img/appointment_one.png"),
        busitypeName: "公司放款审核",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "公司放款审核排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "companySeal",
        kindPicture: require("@/assets/img/appointment_two.png"),
        busitypeName: "公司用印",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "公司用印排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "publicAudit",
        kindPicture: require("@/assets/img/appointment_three.png"),
        busitypeName: "公司权证出库审核",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "公司权证出库审核排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "individualLoanAudit",
        kindPicture: require("@/assets/img/appointment_four1.png"),
        busitypeName: "个贷放款审核",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "个贷放款审核排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "individualSeal",
        kindPicture: require("@/assets/img/appointment_five.png"),
        busitypeName: "个贷用印",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "个贷用印排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "individualAudit",
        kindPicture: require("@/assets/img/appointment_six.png"),
        busitypeName: "个贷权证出库审核",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "个贷权证出库审核排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "companyAudit",
        kindPicture: require("@/assets/img/appointment_seven.png"),
        busitypeName: "公司核保",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "公司核保排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "companyCertificatePush",
        kindPicture: require("@/assets/img/appointment_eight1.png"),
        busitypeName: "公司办证送件",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "公司办证送件排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "companyCertificateFetch",
        kindPicture: require("@/assets/img/appointment_eight2.png"),
        busitypeName: "公司办证取件",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "公司办证取件排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "individualCertificatePush",
        kindPicture: require("@/assets/img/appointment_nine1.png"),
        busitypeName: "个贷办证送件",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "个贷办证送件排号，提交排号请求需标注盖章分数"
      },
      {
        bussType: "individualCertificateFetch",
        kindPicture: require("@/assets/img/appointment_nine2.png"),
        busitypeName: "个贷办证取件",
        busistartTime: "08:00",
        busistopTime: "20:00",
        busiDesc: "个贷办证取件排号，提交排号请求需标注盖章分数"
      }
    ];
}
</script>

<style lang="scss" scoped>

</style>
