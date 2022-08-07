package solabo.GongGuHaSong.web.dto;

import lombok.Data;
import solabo.GongGuHaSong.domain.Registration;

@Data
public class RegistrationSaveDto {
    private String _id;
    private String userId;
    private String phoneNumber;
    private int total_Count;
    private Object sizeCount;
    private String userName;
    private String depositTime;
    private String method;
    private String address;

    public Registration toEntity(String title){
        Registration registration = new Registration();
        registration.setUserId(userId);
        registration.setTitle(title);
        registration.setPhoneNumber(phoneNumber);
        registration.setTotal_Count(total_Count);
        registration.setSizeCount(sizeCount);
        registration.setUserName(userName);
        registration.setDepositTime(depositTime);
        registration.setMethod(method);
        registration.setAddress(address);
        return registration;
    }
}
