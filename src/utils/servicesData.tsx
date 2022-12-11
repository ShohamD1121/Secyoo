import { images } from "../images";

export const services = [
  {
    title: "Penetration Testing",
    desc: "Penetration Testing simulates cyber attacks on a company's computer systems and networks to identify vulnerabilities and assess the effectiveness of the company's security measures.",
    img: images.PenTest,
    bgColor: "bg-blue-100",
  },
  {
    title: "Anti-Virus Bypass",
    desc: "Anti-virus bypass is needed to understand and defend against the techniques used by malicious software to evade detection and removal.",
    img: images.antivirus,
    bgColor: "bg-blue-200",
  },
  {
    title: "Reverse Engineering and Malware Analysis",
    desc: "Malware analysis is needed to understand the behavior and effects of malicious software and to develop effective defenses against it.",
    img: images.cyber,
    bgColor: "bg-blue-100",
  },
  {
    title: "Cyber Security Lectures",
    desc: (
      <>
        <p>Diverse cyber security lectures about : </p>
        <div className="w-4/5 mx-auto mt-2">
          <p>- App Sec</p>
          <p>- Reverse Engineering and Malware Analysis</p>
          <p>- Low Level Development</p>
        </div>
      </>
    ),
    img: images.professor,
    bgColor: "bg-blue-200",
  },
];
