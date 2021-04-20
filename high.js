
$(function(){
    $('#submit-btn').bind('click',function(){
    //    $('input').change(function(){
           $.getJSON('/in/high/processing',{
            client_name : $('input[name="client-name"]').val(),
            mix_id : $('input[name="mix-id"]').val(),
            company_name : $('input[name="company"]').val(),
            date : $('input[name="date"]').val(),
            project_name : $('input[name="project-name"]').val(),
            site_address : $('input[name="site-address"]').val(),
            type_concrete : $('input[name="type-concrete"]:checked').val(),
            grade_concrete : $('input[name="grade-concrete"]:checked').val(),
            nmsa : $('input[name="nmsa"]:checked').val(),
            exposure : $('input[name="exposure"]:checked').val(),
            workability : $('input[name="workability"]:checked').val(),
            degree_control : $('input[name="degree-control"]:checked').val(),
            pumping: $('input[name="pumping"]:checked').val(),
            aggregate_type : $('input[name="aggregate-type"]:checked').val(),
            mineral_admixture : $('input[name="mineral-admixture"]:checked').val(),
            cement_reduction : $('input[name="cement-reduction"]').val(),
            chemical_name : $('input[name="chemical-name"]').val(),
            chemical_dose : $('input[name="chemical-dose"]').val(),
            chemical_reduction : $('input[name="chemical-reduction"]').val(),
            cement_type : $('input[name="cement-type"]:checked').val(),
            sp_grav_cement : $('input[name="sp-grav-cement"]').val(),
            sp_grav_ca : $('input[name="sp-grav-ca"]').val(),
            sp_grav_fa : $('input[name="sp-grav-fa"]').val(),
            sp_grav_mineral : $('input[name="sp-grav-mineral"]').val(),
            sp_grav_chemical : $('input[name="sp-grav-chemical"]').val(),
            zone_fa : $('input[name="zone-fa"]:checked').val(),
            absorption_ca : $('input[name="absorption-ca"]').val(),
            absorption_fa : $('input[name="absorption-fa"]').val(),
            moisture_ca : $('input[name="moisture-ca"]').val(),
            moisture_fa : $('input[name="moisture-fa"]').val(),
            quantity_cum : $('input[name="quantity-cum"]').val(),
            quantity_cubes : $('input[name="quantity-cubes"]').val(),
            wc : $('input[name="wc"]').val(),
            std_deviation : $('input[name="std-deviation"]').val(),
            // abrams_x1 : $('input[name="abrams-x1"]').val(),
            // abrams_x2 : $('input[name="abrams-x2"]').val(),
            // abrams_x3 : $('input[name="abrams-x3"]').val(),
            cm_additional : $('input[name="cm-additional"]').val(),
            cal_round : $('input[name="cal-round"]').val(),
            custom_slump : $('input[name="custom-slump"]').val(),
            pumping_reduction : $('input[name="pumping-reduction"]').val(),
            chemical_dose_vol : $('input[name="chemical-dose-vol"]').val(),
            }, function(data){{
                $("#output_cum_cement").text(data.cement_content);
                $("#output_cum_ca").text(data.ca_content);
                $("#output_cum_fa").text(data.fa_content);
                $("#output_cum_water").text(data.water_content);
                $("#output_cum_mineral_admixture").text(data.mineral_content);
                $("#output_cum_chemical_admixture").text(data.volume_chemical);
                $("#output_cube_cement").text(data.cubes_cement_content);
                $("#output_cube_ca").text(data.cubes_ca_content);
                $("#output_cube_fa").text(data.cubes_fa_content);
                $("#output_cube_water").text(data.cubes_water_content);
                $("#output_cube_mineral_admixture").text(data.cubes_mineral_content);
                $("#output_cube_chemical_admixture").text(data.cubes_volume_chemical);
                $("#prop_1").text(data.out_prop_first);
                $("#prop_2").text(data.out_prop_sec);
                $("#prop_3").text(data.out_prop_third);
                $("#output_wc_recommended_1").text(data.wc_recommended);
                $("#output_wc_recommended_2").text(data.wc_recommended);

                var ctx = document.getElementById('myChart').getContext('2d');
                var myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data:  {
                        labels: ['Cement',
                                 'Coarse \n Aggregates',
                                 'Fine \n Aggregates',
                                  'Water'],
                        datasets: [{
                            label: 'My second dataset',
                            backgroundColor: ['#4d5360','#fdb45c','#f7464a','#29cc97'],
                            data: [data.cement_content,
                                    data.fa_content,
                                    data.ca_content,
                                    data.water_content],
                                    borderColor: '#ffffd9',
                                    borderWidth: 3.5,

                        }]
                    },
                    options: {responsive: true,
                              legend: {
                                    display: false,
                                },
                               plugins:{
                                labels: {
                                    render: 'label',
                                    arc: false,
                                    fontSize: 12,
                                    fontStyle: 'normal',
                                    fontColor: ['#fff','#000','#000','#fff'],
                                    fontFamily: 'roboto'
                               }
                            },
                                cutoutPercentage: 70,}
                });

            }
            });
            return false;
            });
        });


