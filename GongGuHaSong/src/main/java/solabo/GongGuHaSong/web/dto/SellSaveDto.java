package solabo.GongGuHaSong.web.dto;

import lombok.Data;
import solabo.GongGuHaSong.domain.Sell;

import java.util.Date;

@Data
public class SellSaveDto {
    private String title;
    private String managerId;
    private int price;
    private int min_count;
    private String info;
    private Date startDate;
    private Date finishDate;
    private Date startResearch;
    private Date finishResearch;
    private String notice;
    private String category;
    private String mainPhoto;
    private String sizePhoto;

    public Sell toEntity(){
        Sell sell = new Sell();
        sell.setTitle(title);
        sell.setManagerId(managerId);
        sell.setPrice(price);
        sell.setMin_count(min_count);
        sell.setInfo(info);
        sell.setStartDate(startDate);
        sell.setFinishDate(finishDate);
        sell.setStartResearch(startResearch);
        sell.setFinishResearch(finishResearch);
        sell.setNotice(notice);
        sell.setCategory(category);
        sell.setMainPhoto(mainPhoto);
        sell.setSizePhoto(sizePhoto);
        return sell;
    }
}
