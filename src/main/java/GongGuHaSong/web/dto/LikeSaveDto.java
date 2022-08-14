package GongGuHaSong.web.dto;


import GongGuHaSong.domain.Like;
import lombok.Data;

@Data
public class LikeSaveDto {
    private String name;
    private String id;
    private String endDate;
    private Integer end;

    public Like toEntity(){
        Like like = new Like();
        like.setName(name);
        like.setId(id);
        like.setEndDate(endDate);
        like.setEnd(end);

        return like;
    }
}
