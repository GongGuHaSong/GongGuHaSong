package GongGuHaSong.domain;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "order")
public class Registration {
    @Id
    private String _id;
    private String title;
    private String userId;
    private String phoneNumber;
    private int total_Count;
    private Object sizeCount;
    private String userName;
    private String depositTime;
    private String method;
    private String address;
}
