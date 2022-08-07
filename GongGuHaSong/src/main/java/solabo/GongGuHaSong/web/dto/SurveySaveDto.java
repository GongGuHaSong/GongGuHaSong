package solabo.GongGuHaSong.web.dto;

import lombok.Data;
import solabo.GongGuHaSong.domain.Survey;

@Data
public class SurveySaveDto{
    private int count;

    public Survey toEntity(String title, String userId){
        Survey survey = new Survey();
        survey.setTitle(title);
        survey.setUserId(userId);
        survey.setCount(count);
        return survey;
    }
}
