package solabo.GongGuHaSong.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Document(collection = "like")
public class Like {
        @Id
        private String id;
        private String name;
        private String endDate;
        private Integer end;

}
