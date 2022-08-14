package solabo.GongGuHaSong.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import solabo.GongGuHaSong.domain.Sell;
import solabo.GongGuHaSong.domain.Registration;
import solabo.GongGuHaSong.repository.RegistrationRepository;
import solabo.GongGuHaSong.repository.SellRepository;
import solabo.GongGuHaSong.web.dto.SellSaveDto;

import java.util.List;

@RequiredArgsConstructor //DI
@RestController //데이터 리턴 서버
public class SellController {
    //DI
    private final SellRepository SellRepository;
    private final RegistrationRepository RegistrationRepository;

    /*
    @PutMapping("/sell")
    public void sellUpdate(@RequestBody SellSaveDto dto, @RequestParam String managerId, @RequestParam String title){
        Sell sell1 = SellRepository.findOne(title, managerId);
        Sell sell2 = dto.toEntity();
        if (sell1.getManagerId().equals(managerId)) {
            SellRepository.save(sell2);
            SellRepository.delete(sell1);
        }
    }

     */


    @GetMapping("/sell/all")
    public List<Sell> findAll(){
        return SellRepository.findAll();
    }

    @GetMapping("/sell")
    public int Count(@RequestParam String title){
        List registrationList = RegistrationRepository.findByTitle(title);
        int total = 0;
        for (int i=0; i<registrationList.size();i++){
            Registration registration = (Registration) registrationList.get(i);
            total = total + registration.getTotal_Count();
        }
        return total;
    }

    @PostMapping("/sell")
    public Sell save(@RequestBody SellSaveDto dto) {
        String title = dto.getTitle();
        List one =  SellRepository.findByTitle(title);
        if (one != null){
            //@RequsetBody 어노테이션을 붙인 이유는 json 타입으로 데이터를 받기 위함.
            Sell sellEntity = SellRepository.save(dto.toEntity());
            return sellEntity;
        }
        return null;
    }
}