package solabo.GongGuHaSong.web.dto;

import lombok.Data;
import solabo.GongGuHaSong.domain.Board;
import solabo.GongGuHaSong.domain.Member;

@Data
public class MemberSaveDto {

    private String pid;
    private String name;
    private String pwd;
    private String phone;
    private String address;
    private String email;

    public Member toEntity(){
        Member member = new Member();
        member.setName(name);
        member.setPid(pid);
        member.setPwd(pwd);
        member.setPhone(phone);
        member.setEmail(email);
        member.setAddress(address);
        return member;
    }
}
